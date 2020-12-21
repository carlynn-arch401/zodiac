function zodiac(){
    var birthmonth = document.getElementById("month").value;
    var birthday = document.getElementById("day").value;
    var result = " Unknown because you didn't put a valid date.";
  
  
if (birthmonth == 3&& birthday >= 21 || birthmonth == 4 && birthday <= 19){
    result = ("Aries");
    document.getElementById("photo").innerHTML="<img src='Aries.jpg'width=30%>";
    document.getElementById("characteristic").innerHTML="Aries loves to be number one, so it’s no surprise that these audacious rams are the first sign of the zodiac. Bold and ambitious, Aries dives headfirst into even the most challenging situations. Aries is a passionate, motivated, and confident leader who builds community with their cheerful disposition and relentless determination. Uncomplicated and direct in their approach, they often get frustrated by exhaustive details and unnecessary nuances.";
}
 if (birthmonth == 4&& birthday >= 20|| birthmonth == 5 && birthday <= 20){
    result = ("Taurus");
    document.getElementById("photo").innerHTML="<img src='Taurus.jpg'width=30%>";
    document.getElementById("characteristic").innerHTML="Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments, surrounded by soft sounds, soothing aromas, and succulent flavors. Taurus is ruled by Venus, the enchanting planet that governs love, beauty, and money. Taurus’s Venusian influence make this earth sign the most sensual of the zodiac: These cosmic oxen are enchanted by any physical manifestation of comfort and luxury. ";
}
 if (birthmonth == 5&& birthday >= 21 || birthmonth == 6 && birthday <= 20){
    result = ("Gemini");
    document.getElementById("photo").innerHTML="<img src='Gemini.jpg'width=30%>";
    document.getElementById("characteristic").innerHTML="Have you ever been so busy that you wished you could clone yourself just to get everything done? That’s the Gemini experience in a nutshell. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself."; 
}
 if (birthmonth == 6&& birthday >= 21 || birthmonth == 7&& birthday <= 22){
    result = ("Cancer");
    document.getElementById("photo").innerHTML="<img src='Cancer.jpg'width=30%>";
    document.getElementById("characteristic").innerHTML="Cancer is a cardinal water sign. Represented by the crab, this crustacean seamlessly weaves between the sea and shore representing Cancer’s ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces: For instance, Cancers can effortlessly pick up the energies in a room.";
}
 if (birthmonth == 7&& birthday >= 23 || birthmonth == 8 && birthday <= 22){
    result = ("Leo");
    document.getElementById("photo").innerHTML="<img src='Leo.jpg'width=30%>";
    document.getElementById("characteristic").innerHTML="oll out the red carpet because Leo has arrived. Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. They’re delighted to embrace their royal status: Vivacious, theatrical, and passionate, Leos love to bask in the spotlight and celebrate themselves. "; 
}
 if (birthmonth == 8 && birthday >= 23 || birthmonth == 9 && birthday <= 22){
    result = ("Virgo");
    document.getElementById("photo").innerHTML="<img src='Virgo.jpg'width=30%>";
    document.getElementById("characteristic").innerHTML="Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo’s deep-rooted presence in the material world. Virgos are logical, practical, and systematic in their approach to life. This earth sign is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice.";
}
 if (birthmonth == 9&& birthday >= 23 || birthmonth == 10&& birthday <= 22){
    result = ("Libra");
    document.getElementById("photo").innerHTML="<img src='Libra.png'width=30%>";
    document.getElementById("characteristic").innerHTML="Libra is an air sign represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra's fixation on balance and harmony. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life.";
}
 if (birthmonth == 10 && birthday >= 23|| birthmonth == 11 && birthday <= 21){
    result = ("Scorpio");
    document.getElementById("photo").innerHTML="<img src='Scorpio.jpg'width=30%>";
    document.getElementById("characteristic").innerHTML="Scorpio is one of the most misunderstood signs of the zodiac. Because of its incredible passion and power, Scorpio is often mistaken for a fire sign. In fact, Scorpio is a water sign that derives its strength from the psychic, emotional realm. ";
}
 if (birthmonth == 11 && birthday >= 22 || birthmonth == 12 && birthday <= 21){
    result = ("Sagittarius");
    document.getElementById("photo").innerHTML="<img src='Sagittarius.jpg'width=30%>";
    document.getElementById("characteristic").innerHTML="Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures.";
}

if(birthmonth == 12 && birthday >= 22 || birthmonth == 1 && birthday <= 19){
    result = ("Capricorn");
    document.getElementById("photo").innerHTML="<img src='Capricorn.jpg'width=30%>";
    document.getElementById("characteristic").innerHTML="The last earth sign of the zodiac, Capricorn is represented by the sea goat, a mythological creature with the body of a goat and tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms.";
}
 if (birthmonth == 1&& birthday >= 20 || birthmonth == 2 && birthday <= 18){
     result = ("Aquarius");
     document.getElementById("photo").innerHTML="<img src='Aquarius.jpg/'width=30%>";
     document.getElementById("characteristic").innerHTML="They are happy to do their own thing and follow their own noses, not really concerned with what other people think or conforming to shared ideas and rules.They don’t need others to validate their talent and choices, they don’t need to prove themselves to anyone.This can make Aquarius seem arrogant, and they can sometimes be dismissive of those who don’t share their views on the world. Aquarius is highly intellectual and loves learning about the world and traveling, especially to places that are less reliant on technology.They aren’t the type of people that have their cell phones in their hands all day.";
}
    
 if (birthmonth == 2&& birthday >= 19 || birthmonth == 3&& birthday <= 20){
      result = ("Pisces");
      document.getElementById("photo").innerHTML="<img src='Pisces.jpg'width=30%>";
      document.getElementById("characteristic").innerHTML="Pisces, a water sign, is the last constellation of the zodiac. It's symbolized by two fish swimming in opposite directions, representing the constant division of Pisces' attention between fantasy and reality. As the final sign, Pisces has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs.";        
}

 else if (birthmonth>12||birthday>31)
{
    alert("Please enter an accurate date ! ");
}
document.getElementById("output").innerHTML= result;
}

