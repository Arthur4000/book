import { observeTopOfSitePixelAnchor } from './header.js';
import { setArtworks } from './artworks.js';
import artworks from './artworks.json' assert { type: 'json' };

setArtworks(artworks);
observeTopOfSitePixelAnchor();