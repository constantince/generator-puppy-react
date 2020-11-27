const Generator = require("yeoman-generator");

module.exports = class React extends Generator {

    async prompting () {
        const prompts = [
            {
              type: 'input',
              name: 'name',
              message: 'Entre your react project name',
              default: 'noop'
            }
        ];

        this.answer = await this.prompt(prompts);
    }

    //覆盖询问条件
    writing() {
        // console.log('writing to ', this.destinationPath(), this.templatePath());
        // this.destinationRoot(this.destinationPath(name));
        this.fs.copyTpl(
            this.templatePath(),
            this.destinationPath(this.answer.name),
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