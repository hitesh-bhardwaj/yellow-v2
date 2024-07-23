import { getPaginatedWorks } from '@/lib/works';

export default async function handler(req, res) {
    const { page = 1 } = req.query;

    try {
        const { works, pagination } = await getPaginatedWorks({
            currentPage: parseInt(page, 10),
            queryIncludes: 'archive',
        });

        res.status(200).json({ works, pagination });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch works' });
    }
}
