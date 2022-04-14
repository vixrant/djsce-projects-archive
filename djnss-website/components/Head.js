import Head from 'next/head';

export default ({ title }) => (
    <Head>
        <title>DJ NSS | { title }</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <link rel="stylesheet" 
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" 
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" 
            crossOrigin="anonymous" 
        />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css" />

        <link href="https://fonts.googleapis.com/css?family=Quicksand|Century Gothic" rel="stylesheet" />   

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" 
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.js" />
        <script>
            new WOW().init();
        </script>
    </Head>
);
