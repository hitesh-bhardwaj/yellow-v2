"use client"
import styles from "./styles.module.css";
import useSearch, { SEARCH_STATE_LOADED } from '@/hooks/use-search';
import { postPathBySlug } from "@/lib/posts";

import { useLenis } from "lenis/react";
import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const SEARCH_VISIBLE = 'visible';
const SEARCH_HIDDEN = 'hidden';

const SearchButton = ({ isInverted, menuOpen }) => {

    const lenis = useLenis();
    const formRef = useRef();
    const [searchVisibility, setSearchVisibility] = useState(SEARCH_HIDDEN);
    const { query, results, search, clearSearch, state } = useSearch({
        maxResults: 8,
    });
    const searchIsLoaded = state === SEARCH_STATE_LOADED;
    // When the search visibility changes, we want to add an event listener that allows us to
    // detect when someone clicks outside of the search box, allowing us to close the results
    // when focus is drawn away from search
    useEffect(() => {
        // If we don't have a query, don't need to bother adding an event listener
        // but run the cleanup in case the previous state instance exists
        if (searchVisibility === SEARCH_HIDDEN) {
            removeDocumentOnClick();
            return;
        }
        addDocumentOnClick();
        addResultsRoving();
        // When the search box opens up, additionall find the search input and focus
        // on the element so someone can start typing right away
        const searchInput = Array.from(formRef.current.elements).find((input) => input.type === 'search');
        searchInput.focus();
        return () => {
            removeResultsRoving();
            removeDocumentOnClick();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchVisibility]);
    /**
     * addDocumentOnClick
     */
    function addDocumentOnClick() {
        document.body.addEventListener('click', handleOnDocumentClick, true);
    }
    /**
     * removeDocumentOnClick
     */
    function removeDocumentOnClick() {
        document.body.removeEventListener('click', handleOnDocumentClick, true);
    }
    /**
     * handleOnDocumentClick
     */
    function handleOnDocumentClick(e) {
        if (!e.composedPath().includes(formRef.current)) {
            setSearchVisibility(SEARCH_HIDDEN);
            clearSearch();
        }
    }
    /**
     * handleOnSearch
     */
    function handleOnSearch({ currentTarget }) {
        search({
            query: currentTarget.value,
        });
    }
    /**
     * handleOnToggleSearch
     */
    function handleOnToggleSearch() {
        setSearchVisibility(SEARCH_VISIBLE);
        document.querySelector(".search-wrapper").classList.add("open");
        lenis.stop();
    }
    /**
     * addResultsRoving
     */
    function addResultsRoving() {
        document.body.addEventListener('keydown', handleResultsRoving);
    }
    /**
     * removeResultsRoving
     */
    function removeResultsRoving() {
        document.body.removeEventListener('keydown', handleResultsRoving);
    }
    function onSearchCloseClick() {
        document.querySelector(".search-wrapper").classList.remove("open");
        lenis.start();
    }
    /**
     * handleResultsRoving
     */

    function handleResultsRoving(e) {
        const focusElement = document.activeElement;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (focusElement.nodeName === 'INPUT' && focusElement.nextSibling.children[0].nodeName !== 'P') {
                focusElement.nextSibling.children[0].firstChild.firstChild.focus();
            } else if (focusElement.parentElement.nextSibling) {
                focusElement.parentElement.nextSibling.firstChild.focus();
            } else {
                focusElement.parentElement.parentElement.firstChild.firstChild.focus();
            }
        }

        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (focusElement.nodeName === 'A' && focusElement.parentElement.previousSibling) {
                focusElement.parentElement.previousSibling.firstChild.focus();
            } else {
                focusElement.parentElement.parentElement.lastChild.firstChild.focus();
            }
        }
    }

    /**
     * escFunction
     */

    // pressing esc while search is focused will close it

    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            clearSearch();
            setSearchVisibility(SEARCH_HIDDEN);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', escFunction, false);

        return () => {
            document.removeEventListener('keydown', escFunction, false);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex items-center relative" id="search-btn">
            <div className="search-wrapper">
                <span className="bg"></span>
                <div className="search-bar-container container flex items-center justify-between w-full py-[2.7%] tablet:py-[5%] mobile:py-[7%] h-fit relative">
                    <div className="flex flex-wrap mx-auto items-center w-full justify-between mobile:flex-nowrap">
                        <span className="bg"></span>
                        <div className="w-fit overflow-hidden tablet:hidden mobile:hidden">
                            <Link href="/" className="pointer-events-auto">
                                <Image
                                    loading="lazy"
                                    className="w-[9vw] opacity-0 logo mobile:w-[25vw] relative z-[202] tablet:w-[15vw]"
                                    src="/logo-white.svg"
                                    alt="Yellow Brand Logo"
                                    width={153}
                                    height={48}
                                />
                            </Link>
                        </div>
                        <div className="search-container w-[50%] tablet:w-[80%] mobile:w-[80%]">
                            <form ref={formRef} action="/search" data-search-is-active={!!query} className="flex items-center justify-center w-full h-full mobile:justify-end">
                                <input
                                    placeholder="Search for something"
                                    className="search-input landscape-input z-10 text-[1.4vw] tablet:text-[4vw] mobile:text-[4.5vw]"
                                    type="search"
                                    name="q"
                                    value={query || ''}
                                    onChange={handleOnSearch}
                                    autoComplete="off"
                                    required
                                />
                                <div className={styles.navSearchResults}>
                                    {results.length > 0 && (
                                        <ul>
                                            {results.map(({ slug, title }, index) => {
                                                return (
                                                    <li key={slug}>
                                                        <Link tabIndex={index} href={postPathBySlug(slug)}>
                                                            {title}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                    {results.length === 0 && (
                                        <p className="text-white text-[1.2vw] text-center">
                                            Sorry, not finding anything for <strong>{query}</strong>
                                        </p>
                                    )}
                                </div>
                            </form>
                        </div>
                        <div className="ml-[-10px] mobile:mt-0">
                            <button aria-label="close" className="close-btn" onClick={onSearchCloseClick}>
                                <span className="bg" ></span>
                                <span className="label" >Close</span>
                                <span className="icon" >
                                    <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="desktop-icon icon-svg" >
                                        <line x1="2.06066" y1="1" x2="25.8909" y2="24.8302" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" ></line>
                                        <line x1="1" y1="24.8302" x2="24.8302" y2="0.999996" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" ></line>
                                    </svg>
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="mobile-icon icon-svg" >
                                        <line x1="1.99816" y1="1.94167" x2="15.0625" y2="15.006" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" ></line>
                                        <line x1="15.0625" y1="2.06066" x2="1.99816" y2="15.125" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" ></line>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <button aria-label="Search Button" className="search-btn" onClick={handleOnToggleSearch} disabled={!searchIsLoaded}>
                <span className="bg" ></span>
                <span className="label" >Search</span>
                <span className="icon" >
                    <svg width="28" height="26" viewBox="0 0 28 26" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" className={`${isInverted ? "text-white" : ""} ${menuOpen ? "text-white" : ""} search-icon`} >
                        <circle cx="11" cy="11" r="10" strokeWidth="2" ></circle>
                        <line x1="18.6585" y1="18.2474" x2="26.6585" y2="25.2474" strokeWidth="2" ></line>
                    </svg>
                </span>
            </button>
        </div>
    )
}

export default SearchButton;