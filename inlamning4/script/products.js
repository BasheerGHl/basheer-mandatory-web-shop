/* jshint esversion:6 */
$(()=>{
$(document).ready(function () {
    $(".star").hover(function () {
        $(this).addClass('starred');
        $(this).prevAll('.star').addClass('starred');
    }, function () {
        $(this).removeClass('starred');
        $(this).prevAll('.star').removeClass('starred');
    });
    $('.star').click(function (e) {
        $(this).addClass('starred-chosen');
        $(this).prevAll('.star').addClass("starred-chosen");
    });
});

$(document).ready(function () {
    $("#addComment").click(function () {
        $("form").html('<input type="text" placeholder="Name"> <textarea name="" id="" cols="30" rows="10"></textarea>');
    });
});


let send = document.getElementById("send").value;
send.addEventListener("click", showOrder);

function showOrder(e) {
    e.preventdefault();
    fetch("http://demo.edument.se/api/reviews", {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                FirstName: "basheer",
                LastName: "ghlawnji",
                Email: "basheer.ghlawnji@gmail.com",
                Phone: "12311421",
                StreetAddress: "lessebo",
                ZipCode: "12334",
                City: "växjö",
                Comment: "love it ",
                OrderItem: [{
                    Name: "Marna Pink Piggy Steamer",
                    Price: "12.02",
                    Description: "Silicone-made multipurpose lid can be placed directly over ingredients in a pot to help them cook evenly, can be used to cover food in the microwave, and also can be used as a jar opener. It is very funny to watch the steam come out from its snout!",
                    Image: "http:\/\/demo.edument.se\/content\/ProductImages\/1.jpg",
                    Url: "https:\/\/www.amazon.com\/dp\/B007XHTDPG",
                }],
                Reviews: [{
                    Name: "Anymous",
                    Comment: "good",
                    "Rating": 5,
                }],
            })
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch(() => {
            console.log("error");
        });
}
showOrder();

});