import { writable } from 'svelte/store';
import * as Cheerio from 'cheerio'

export const CheerioDoc = writable(Cheerio.load("",{xml: true}));
