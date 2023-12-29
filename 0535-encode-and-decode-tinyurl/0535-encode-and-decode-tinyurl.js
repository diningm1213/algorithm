/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

const urlMap = new Map();
let count = 0;

var encode = function(longUrl) {
    if (urlMap.has(longUrl)) {
        return urlMap.get(longUrl);
    } else {
        const shortUrl = `http://tinyurl.com/${count.toString()}`
        urlMap.set(shortUrl, longUrl);
        urlMap.set(longUrl, shortUrl);
        count++;
        
        return shortUrl;
    }
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return urlMap.get(shortUrl);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */