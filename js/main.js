require.config({
    baseUrl: 'js',
    paths: {
        jquery: "../vendor/jquery-1.12.3",
        hello: "./hello"
    }

})


require(['hello'],function(hello){
    hello();
})
