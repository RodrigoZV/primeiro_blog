'use server'

import { characters } from "../db";

export async function getCharacters() {
    return await characters
}