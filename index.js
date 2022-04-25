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

    // function checkStatus(url) {
    //   const response = fetch(url, {
    //     mode: "no-cors",
    //     cache: "no-cache",
    //     credentials: "same-origin",
    //     redirect: "follow",
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //       "Content-Type": "application/json",
    //     },
    //   return response;
    // }

    // lineArr.forEach((url) => {
    //   checkStatus(url).then((data) => {
    //     console.log(data);
    //   });
    // });

    lineArr.forEach((url) => {
      makeRequest(url);
    });
  });
  async function makeRequest(url) {
    try {
      const response = await fetch(url, {
        method: "GET",
        mode: "no-cors",
        redirect: "follow",
      });

      console.log("status code: ", response.status); // 👉️ 200

      if (!response.ok) {
        console.log(response);
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
    }
  }
});

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data
// https://stackoverflow.com/questions/6467848/how-to-get-http-response-code-for-a-url-in-java
