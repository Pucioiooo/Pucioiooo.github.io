header1 = "firstly, about everything"
apology1 = "first of all, i want to <b>say sorry</b>. i took you for granted and hurt you im really sorry about this."
apology2 = "i dont want to give up on us :(, i wont stop until you actually say were done and you block me at everything )."
header2 = "Next is about the future."
breakup1 = "If you ask me how am i going to move forward if don't(right now im hanging by a threat kasi atleast your talking to me)TBH i don't know what future holds us but the future that i want is the one that we're together."
breakup2 = "I know i messed up and i know i hurt you but please give me a chance to make it up to you :((( just please give me a chance to prove to you that i can be better for you. I love you so much."
header3 = "So do you agree to break up with me??"
note = "please dont agree :((("
option1 = "agree"
option2 = "not agree"

const textConfig = {
  text1: "Hello! :(",
  text2: "I have a lot of words to say( i yap a lot ), listen to them.",
  text3: header1,
  text4: apology1,
  text5: apology2,
  text3_2: header2,
  text4_2: breakup1,
  text5_2: breakup2,
  text3_3: header3,
  text4_3: note,
  text6: option1,
  text7: option2,
  text8: "Send me your answer",
  text9: "Send",
  text10: "i miss you",
  text11: "I know,miss you too .",
  text12: "Can we talk properly please :(",
  text13: "agree",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "auto",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#text5").html(textConfig.text5);
  $("#text3_2").html(textConfig.text3_2);
  $("#text4_2").html(textConfig.text4_2);
  $("#text5_2").html(textConfig.text5_2);
  $("#text3_3").html(textConfig.text3_3);
  $("#text4_3").html(textConfig.text4_3);
  $("#no").html(textConfig.text6);
  $("#yes").html(textConfig.text7);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/test5.jpg",
      imageWidth: 545,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text10;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text8,
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='must type something...'>",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text9,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text13,
          background: '#fff url("img/iput-bg.jpg")',
          title: textConfig.text11,
          text: textConfig.text12,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "https://www.facebook.com/janrhickpucio";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
