const testimonials = [
    {
        name: "- Gil H.",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        text: "Very easy to use. It's incredible. I would like to personally thank you for your outstanding product."
    },
    {
        name: "- Cynthie O.",
        photoUrl: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        text: "Since I've worked with Justin, I've doubled my profits! He has completely surpassed our expectations. I just can't get over how much he has helped."
    },
    {
        name: "- Jillene O.",
        photoUrl: "https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHdvbWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        text: "I could probably go into sales for you. I couldn't have asked for more than this. Thank you so much!"
    },
    {
        name: "- Baldwin Y.",
        photoUrl: "https://images.unsplash.com/photo-1535931737580-a99567967ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHNxdWFyZSUyMHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        text: "It really saves me time and effort. Justin is exactly what our business has been lacking. I love your system. I love your work."
    },
    {
        name: "- Robyn B.",
        photoUrl: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fHdvbWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        text: "Great job, I will definitely be ordering again! Thank you for making it painless, pleasant and most of all hassle free!"
    }
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".usr-text");
const nameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
    const {name, photoUrl, text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    nameEl.innerText = name;
    idx++;
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial();
    }, 5000);
}