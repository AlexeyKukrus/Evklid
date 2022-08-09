document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.step-text').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      console.log (path)

      document.querySelectorAll('.how-card').forEach(function(tabContent) {
        tabContent.classList.remove('how-card-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('how-card-active')
    })
  })
})