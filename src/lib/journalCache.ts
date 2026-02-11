import { Journal } from "@/types/journal";

let journalCache: Journal[] | null = null;

export const getJournalCache = () => journalCache;

export const setJournalCache = (data: Journal[]) => {
  journalCache = data;
};
