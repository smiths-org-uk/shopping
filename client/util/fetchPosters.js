require("chromedriver");
const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const films = require("../public/posts/filmsSeen.json");
const tvShows = require("../public/posts/tvShowsSeen.json")
const https = require('https');
const fs = require('fs');

if (!fs.existsSync(__dirname + "/posters")) {
    fs.mkdirSync(__dirname + "/posters");
}

const imdb = "https://www.imdb.com/title";

const screen = {
    width: 1280,
    height: 720
};

const buildDriver = () => {
    return new Builder()
        .forBrowser('chrome')
        .setChromeOptions(
            new chrome.Options()
                // .headless()
                .windowSize(screen)
        )
        .build();
};


async function fetchPoster(tconst) {
    const driver = await buildDriver();

    await driver.get(`${imdb}/${tconst}`);
    const title = await driver.getTitle();
    console.log(title);

    const titleOverviewWidget = await driver.findElement(By.id("title-overview-widget"));
    const posterDiv = await titleOverviewWidget.findElement(By.className("poster"));
    const poster = await posterDiv.findElement(By.tagName("img"));
    const posterSrc = await poster.getAttribute("src");

    const posterImg = posterSrc.substring(0, posterSrc.indexOf("._V1_") + 5) + ".jpg";
    console.log(posterImg);

    const file = fs.createWriteStream(`${__dirname}/../public/posts/posters/${tconst}.jpg`);
    https.get(posterImg, response => {
        response.pipe(file);
    });

    driver.quit();
};

async function main() {
    for (const film of films) {
        if (!fs.existsSync(`${__dirname}/../public/posts/posters/${film.tconst}.jpg`)) {
            await fetchPoster(film.tconst);
        }
    }
    for (const tvShow of tvShows) {
        if (!fs.existsSync(`${__dirname}/../public/posts/posters/${tvShow.tconst}.jpg`)) {
            await fetchPoster(tvShow.tconst);
        }
    }
}

main();