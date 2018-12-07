// TODO: don't run on pageload, use start/stop button in popup

function clickNewYears() {
  const newYears = document.getElementById('108848event')
  newYears.click()
}

function clickSelling() {
  const selling = document.getElementById('check-selling')
  selling.click()

  setTimeout(() => {
    const posts = document.querySelectorAll('.post')
    let itemsProcessed = 0
    let buyPosts = 0

    posts.forEach((post, index, array) => {
      itemsProcessed++

      if (itemsProcessed === array.length) {
        if (buyPosts === 0) window.location.reload()
      } else {
        if (post.querySelector('button').innerText == 'BUY') {
          console.log(post.href);
          buyPosts++
        }
      }
    })
  }, 1000)
}

setTimeout(() => { clickNewYears() }, 500)
setTimeout(() => { clickSelling() }, 1000)
