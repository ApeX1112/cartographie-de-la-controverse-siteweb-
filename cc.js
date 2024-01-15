document.querySelectorAll('.dropdown').forEach(function(dropBtn) {
    dropBtn.addEventListener('click', function() {
        var dropdownContent = this.querySelector('.dropdown-content');
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.nav-menu a');

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Remove 'selected' class from all menu items
            menuItems.forEach(function(el) {
                el.classList.remove('selected');
            });

            // Add 'selected' class to the clicked menu item
            this.classList.add('selected');
        });
    });
});
