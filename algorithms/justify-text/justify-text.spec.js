const justifyText = require('./justify-text');

describe.only('#justifyText', function () {
    it('should be a function', function () {
        justifyText.should.be.instanceOf(Function);
    });

    it('should return string', function () {
        const text = `
            dfjhdfjdfh    
            sds ssfjuyjy   sdshhd   dfdf
            s    kgmf
                    fkgm
                    kmkm        
        `;

        // console.log(text);
        const str = justifyText(text);
        // console.log(str);

        str.should.be.instanceOf(String);
    })
});