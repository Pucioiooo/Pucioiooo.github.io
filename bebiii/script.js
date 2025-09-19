document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('responseGif').innerHTML = '<img src="https://gifdb.com/images/high/cute-love-baby-kiss-pw26tcs2lnig9xob.gif" alt="Yes GIF">';
    document.getElementById('responseText').innerText = "Thank you, my love! You're the best! 💖 I promise to be better for you.";
    document.getElementById('yesSong').play(); // Play the song
});

document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('responseGif').innerHTML = '<img src="https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif" alt="No GIF">';
    document.getElementById('responseText').innerText = "I'm really sorry, my rib. I will do anything to make it up to you. 😢 Please give me another chance.";
});



