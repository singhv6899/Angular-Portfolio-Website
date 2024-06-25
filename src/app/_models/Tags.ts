export class Tag{

    static readonly ANGULAR = new Tag('Angular','#cc0000');
    static readonly JAVA = new Tag('Java','#0099cc');
    static readonly JAVASCRIPT = new Tag('Javascript','blue');
    static readonly MYSQL = new Tag('MySql','green');
    static readonly NODE = new Tag('NodeJS','orange');
    static readonly HTML = new Tag('HTML','deeppink');
    static readonly BOOTSTRAP = new Tag('Bootstrap','purple');
    static readonly NET = new Tag('.Net','teal');    
    static readonly C = new Tag('C#','#666699');
    static readonly OPENCV = new Tag('OpenCV','indigo');
    static readonly XML = new Tag('XML','#993366');
    static readonly ANDROID = new Tag('Android Studio','lightblue');
    static readonly PYTHON = new Tag('Python','gray');
    static readonly HIBERNATE = new Tag('Hibernate','#006666');
    static readonly TYPESCRIPT = new Tag('Typescript','teal');
    static readonly JENKIN = new Tag('Jenkin','#3399ff');
    static readonly AWS = new Tag('AWS','#ff9966');
    static readonly DOCKER = new Tag('Docker','#cc66ff');

    private constructor(private readonly key: string, public readonly color: string){

    }

    toString(){
        return this.key;
    }
}