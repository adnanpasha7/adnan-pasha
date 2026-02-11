"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getJournals, getJournalBySlug } from "@/lib/journal";
import JournalList from "./components/JournalList";
import JournalDetail from "./components/JournalDetail";
import JournalSkeleton from "./components/JournalSkeleton";
import { Journal } from "@/types/journal";

export default function JournalClient() {
    const searchParams = useSearchParams();
    const slug = searchParams.get("slug");

    const [journals, setJournals] = useState<Journal[]>([]);
    const [entry, setEntry] = useState<Journal | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            setLoading(true);

            const posts = await getJournals();
            setJournals(posts);

            if (slug) {
                const post = await getJournalBySlug(slug);
                setEntry(post);
            } else {
                setEntry(null);
            }

            setLoading(false);
        }

        load();
    }, [slug]);

    if (loading && !slug) return <JournalSkeleton type="list" />;
    if (loading && slug) return <JournalSkeleton type="detail" />;

    if (slug && entry) {
        return <JournalDetail entry={entry} journals={journals} slug={slug} />;
    }

    return <JournalList journals={journals} />;
}
