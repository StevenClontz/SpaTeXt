import { writable } from 'svelte/store';
import * as Cheerio from 'cheerio'

export const CheerioApi = writable(Cheerio.load("",{xml: true}));
