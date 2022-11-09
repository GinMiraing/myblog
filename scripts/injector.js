hexo.extend.filter.register('theme_inject', function(injects) {
    injects.bodyBegin.raw('default', '<div id="web-bg"></div>');
    injects.bodyEnd.raw('default', '<div id="preloadbg" style="display: none;"></div>');
    injects.head.raw('default', '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100;300;400;500;700;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">');
});