const app = new Vue({
    el: '#root',
    data: {
        images : [
            "https://mdbootstrap.com/img/Photos/Slides/img%20(88).jpg",
            "https://mdbootstrap.com/img/Photos/Slides/img%20(121).jpg",
            "https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg"
        ],
        imageIndex: 0
    },
    methods: {
        nextImage : function() {
            this.imageIndex++;
            if (this.imageIndex >= this.images.length) {
                this.imageIndex = 0;
            }
        },
        prevImage : function() {
            this.imageIndex--;
            if (this.imageIndex < 0) {
                this.imageIndex = this.images.length - 1;
            }
        },
        isBulletActive: function (indexBullet) {
            if (this.imageIndex == indexBullet) {
                return "active";
            }
            return "";
        },
        clickBullet: function(indexBullet) {
            this.imageIndex = indexBullet;
        }
        
    }
  });