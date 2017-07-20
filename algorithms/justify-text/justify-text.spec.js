const justifyText = require('./justify-text');

describe.only('#justifyText', function () {
    it('should be a function', function () {
        justifyText.should.be.instanceOf(Function);
    });

    it('should return string', function () {
        const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel cursus turpis. Sed vel rutrum justo. Nulla dui risus, dapibus porta velit ut, luctus interdum ipsum. Nullam dictum molestie tellus, ut tincidunt libero convallis rhoncus. Phasellus volutpat, erat eget elementum porttitor, libero ipsum sodales est, id commodo orci libero ut risus. Sed non elementum sapien. Phasellus finibus, lacus vel euismod suscipit, dui felis pretium ex, ut consequat diam sapien ut lorem. Donec porta magna a nunc euismod egestas.

Morbi mauris odio, dapibus quis dictum ac, malesuada rhoncus ligula. Etiam quam diam, porttitor eu dictum vel, consectetur id eros. Sed convallis.`;

        // console.log(text, '\n\n\n');
        const str = justifyText(text, 30);
        // console.log(str);

        str.should.be.instanceOf(String);
    })
});