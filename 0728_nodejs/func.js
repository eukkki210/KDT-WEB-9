exports.renderFunc =  function showFruits(fruit) {
    $(".images").empty();
    $(".images").append(`<img src="public/img/${fruit}.jpeg" alt="사과 이미지" width="100%">`);
}