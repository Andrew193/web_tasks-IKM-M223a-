class Downloader {
    download(url) {
        throw new Error('Method download() must be implemented');
    }
}

class SimpleDownloader extends Downloader {
    download(url) {
        // Implement the file download logic
        console.log('File downloaded', url)
        return url
    }
}

class CachingDownloader extends Downloader {
    constructor(realDownloader) {
        super();
        this.realDownloader = realDownloader;
        this.cache = {};
    }

    download(url) {
        if (!this.cache.hasOwnProperty(url)) {
            // If data is not found in the cache, download it
            this.cache[url] = this.realDownloader.download(url);
        }

        // Return data from the cache
        return `Cache ${this.cache[url]}`;
    }
}

const simpleDownloader = new SimpleDownloader();
const cachingDownloader = new CachingDownloader(simpleDownloader);

const url = "http://domain.com/resourse.json";

const data1 = simpleDownloader.download(url);
console.log("Data1", data1)
const data2 = cachingDownloader.download(url);
console.log("Data2", data2)

const data3 = cachingDownloader.download(url);
console.log("Data3", data3)
