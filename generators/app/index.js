const Generator = require("yeoman-generator");

module.exports = class Business extends Generator {
    //覆盖询问条件
    writing() {
        console.log('writing to ', this.destinationPath(), this.templatePath('business'));
        // this.destinationRoot(this.destinationPath(name));
        this.fs.copyTpl(
            this.templatePath('business'),
            this.destinationPath(),
            {},
            null,
            { globOptions: { dot: true } }
        );
    }
    
    install() {
        // this.npmInstall();
    }

    end() {
        console.log('react project has been builded...')
    }
}