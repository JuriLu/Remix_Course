import fs from "fs/promises";

export interface Notes {
  id: string;
  title: string;
  content: string;
}

export function storeNotes(notes: Notes | Notes[]) {
  return fs.writeFile("notes.json", JSON.stringify({ notes: notes || [] }));
}

export async function getStoredNotes(): Promise<Notes[]> {
  const rawFileContent = await fs.readFile("notes.json", { encoding: "utf-8" });
  const data = JSON.parse(rawFileContent);
  return data.notes ?? [];
}


