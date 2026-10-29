# Fonts

`shippori-mincho-subset.woff2` — Shippori Mincho 400, cut to the nine Japanese
glyphs the site sets: い ら っ し ゃ 生 き 甲 斐 (いらっしゃい in the hero,
生き甲斐 under the wordmark). 2.5 KB.

Google's font metadata declares no `japanese` subset for this family, so
`next/font/google` can only give us latin — which drops the kana — or the whole
unsubsetted family, which is roughly two thousand files and stalls a cold build
for over ten minutes. Google's CSS2 API will cut a font to an exact string, so
that is what this is.

Shippori Mincho is licensed under the SIL Open Font License 1.1, which permits
self-hosting and subsetting: https://openfontlicense.org

## Regenerating

If the Japanese copy changes, pass the new characters to `text=` and replace
the file:

```bash
curl -A "Mozilla/5.0" --get \
  --data-urlencode "family=Shippori Mincho" \
  --data-urlencode "text=いらっしゃい生き甲斐" \
  "https://fonts.googleapis.com/css2"
```

That prints an `@font-face` block; download the URL inside it to
`src/fonts/shippori-mincho-subset.woff2`.

The other three families (Instrument Serif, Archivo, IBM Plex Mono) are latin
only and come through `next/font/google` normally.
