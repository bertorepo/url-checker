//Get all links from the text area
//store it into array
//loop and check every link if whats the status

//display the link and status in a table forma

$(function () {
  let lineArr = [];
  let statusArr = [];

  $("#check-btn").on("click", function () {
    $.each($("#url-data").val().split(/\n/), function (i, line) {
      if ($.inArray(line, lineArr) === -1) {
        lineArr.push(line);
      }
    });

    lineArr.forEach((url) => {
      getStatus(url);
    });

    async function getStatus(url) {
      const result = await fetch(url, {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }).then((response) => console.log(response));

      return result;
    }
  });
});
