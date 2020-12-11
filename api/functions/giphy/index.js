/* Add functions for gif's implementation. */
import axios from "axios";
import { Extra } from "telegraf";

export const getGif = (ctx) => {
    console.log(ctx.from.first_name, ": /gifSearch")
    const query = ctx.update.message.text.slice(4).trim().toLowerCase();
    if(!query){
        ctx.reply("Please enter a valid query!")
        return;
    }
    const url = 'https://api.giphy.com/v1/gifs/random?tag='+ query +'&api_key=' + process.env.GIPHY_API
    axios.get(url).then(function (response) {
        ctx.replyWithAnimation(response.data.data.images.original.mp4.toString())
    }).catch(function (response) {
        console.log(response)
        ctx.reply(`Some error occured while fetching the result, please try again later!`);
        return;
    });
}