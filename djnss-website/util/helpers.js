const BASE_DIR = process.env.NODE_ENV === 'development' ?  '' : '/nss';
const withBaseDir = (link) => BASE_DIR + link;

console.log(BASE_DIR)

export  {
    BASE_DIR,
    withBaseDir,
}
