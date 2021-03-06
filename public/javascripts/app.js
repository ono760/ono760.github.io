var app = angular.module('gigApp', ['ui.router', 'ngMaterial', 'ngMessages', 'ngAnimate', 'btford.socket-io', 'pascalprecht.translate', 'ngCookies', 'ngSanitize']);
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state('home', {
      url: "/",
      controller: "HomeControl",
      templateUrl: "partials/home.html"
    })
    .state('about', {
      url: "/about",
      controller: "AboutControl",
      templateUrl: "partials/about.html"
    })
    .state('signup', {
      url: "/signup",
      controller: "SignUpControl",
      templateUrl: "partials/signup.html"
    })
    .state('whoami', {
      url: "/whoami",
      controller: "UserControl",
      templateUrl: "partials/whoami.html"
    })
    .state('gigposter', {
      url: "/gigposter",
      controller: "PosterControl",
      templateUrl: "partials/gigposter.html"
    })
    .state('gigseeker', {
      url: "/gigseeker",
      controller: "GigSeekerControl",
      templateUrl: "partials/gigseeker.html"
    })
    .state('signin', {
      url: "/signin",
      controller: "SignInControl",
      templateUrl: "partials/signin.html"
    })
    .state('/user', {
      url: "/user",
      controller: "UserControl",
      templateUrl: "partials/user.html"
    })
    .state('/chatroom', {
      url: "/chatroom",
      controller: "ChatRoomControl",
      templateUrl: "partials/chatroom.html"
    });
}]);
app.config(['$translateProvider', function($translateProvider) {
  //use escape or escapeParameters for sanitize
  $translateProvider.useSanitizeValueStrategy('escapeParameters');
  $translateProvider.translations('en', {
    HEADLINE: 'Welcome to Gig Finder',
    COPYRIGHT: 'Copyright © GigFinder 2016',
    ABOUTHEAD: 'About Gig Finder',
    ABOUTSUBHEAD: 'Our Core Values',
    ABOUTMESSAGE: "Gig Finder was founded in September 2016 by Ono @ Galvanize." + '\n' + "The purpose of Gig Finder is to allow you to find a gig near you." + '\n' + "If you are looking for some help to complete a gig or task, this website is also for you.",
    ABOUTONE: "Honesty",
    ABOUTTWO: "Trust",
    ABOUTTHREE: "Open Communication",
    TONE: "We believe that open communication and honesty is key to success.",
    TTWO: "We believe that you can count on someone to help you accomplish a task.",
    TTHREE: "Communication is key...Talk to each other and accomplish something great.",
    GETSTARTED: "Get Started",
    WHO: "Are you?",
    POSTER: "Looking for help",
    SEEKER: "Looking for a gig",
    WELCOMEPOSTER: "Welcome, Gig Poster",
    WELCOMESEEKER: "Welcome, Gig Seeker",
    POSTGIG: "Post a gig!",
    BROWSEPROF: "Browse Profiles",
    CHAT: "Chat now!",
    POSTPROF: "Post Your Profile!",
    BROWSEGIGS: "Search for Gigs!",
    SEEKERLUCK: "Good luck finding a gig!",
    CHATWELCOME: "Join the conversation!",
    CHATTYPINGHERE: "Type here...",
    SCROLL: "Scroll down to start",
    PICKNICK: "Pick a nickname...",
    GIGSAVAL: "Available Gigs: ",
    GIGLOC: "Gig Location: ",
    GIGAMT: "Gig Amount: ",
    REPLYTO: "Gig Reply email: ",
    GIGDESC: "Gig Description: ",
    GIGLANG: "Preferred Languages: ",
    SIGNUPMESS: "Signup for a free account",
    HAVE: "Have an account already? Log In ",
    HERE: "here",
    LOGIN: "Login with your account",
    NEED: "Need an account? Sign up for free ",
    HOME: " Home",
    ABOUT: "About",
    MY: "My Account",
    USERNAME: "Username",
    PASSWORD: "Password",
    EMAIL: "E-Mail",
    ZIPCODE: "Zip Code",
    SUBMIT: "Create Account!",
    INCORRECT: "Password is incorrect!",
    FIRST: "First Name",
    LAST: "Last Name",
    POSTEDBY: "Posted By: ",
    LOC: "Location: ",
    SUM: "Summary of Skills: ",
    LANGUAGES: "Languages: ",
    POSTEDON: "Posted on: ",
    REPLYPROF: "Contact ",
    PHONE: "Phone Number",
    PROFSAVAL: "Gig seekers profiles: ",
    CHATLOG: "Welcome to the Chat, "
  });
  $translateProvider.translations('es', {
    HEADLINE: 'Bienvenidos A La Página Inicial',
    COPYRIGHT: 'Derechos Reservados © GigFinder 2016',
    ABOUTHEAD: 'Acerca de Gig Finder',
    ABOUTSUBHEAD: 'Nuestros Valores Fundamentales',
    ABOUTMESSAGE: "Gig Finder fue establecido en Septiembre del 2016 por Ono en Galvanize. El Proposito de Gig Finder es proveer al publico con opciones de trabajo.",
    ABOUTONE: "Honestidad",
    ABOUTTWO: "Dependencia",
    ABOUTTHREE: "Comunicación abierta",
    TONE: "Creemos que la honestidad es clave para el exito mutuo.",
    TTWO: "Creemos que puedes contar con gente de confianza para ayudarte a cumplir tu labor.",
    TTHREE: "La comunicación es clave...hablen con mas personas para ayudarse los unos a los otros.",
    GETSTARTED: "Comenzar",
    WHO: "¿Quién eres?",
    POSTER: "Busco ayuda",
    SEEKER: "Busco un trabajo",
    WELCOMEPOSTER: "Bienvenido!",
    WELCOMESEEKER: "Bienvenido Buscador de trabajo",
    POSTGIG: "Publica trabajo",
    BROWSEPROF: "Navega los perfiles!",
    CHAT: "Entra a la sala de chat!",
    POSTPROF: "Publica tu perfil!",
    BROWSEGIGS: "Busca trabajos!",
    SEEKERLUCK: "Suerte encontrando un trabajo!",
    CHATWELCOME: "Únete a la conversación!",
    CHATTYPINGHERE: "Escriba aqui...",
    PICKNICK: "Elige un nombre de usuario para ingresar!",
    GIGSAVAL: "Trabajos disponibles: ",
    GIGLOC: "Ubicación del trabajo: ",
    GIGAMT: "Recompensa: ",
    REPLYTO: "Responder al correo electrónico: ",
    GIGDESC: "Descripción del trabajo: ",
    GIGLANG: "Lenguages preferidos: ",
    SIGNUPMESS: "Suscríbete gratuitamente",
    HAVE: "¿Ya tienes una cuenta? Ingresa ",
    HERE: "aquí",
    LOGIN: "Ingresa con tu cuenta",
    NEED: "¿Necesitas una cuenta? Crea una cuenta gratis ",
    HOME: " Inicio",
    ABOUT: "Acerca de Gig Finder",
    MY: "Mi Cuenta",
    USERNAME: "Nombre de usuario",
    PASSWORD: "Contraseña",
    EMAIL: "Correo electrónico",
    ZIPCODE: "Código postal",
    SUBMIT: "Crear cuenta!",
    INCORRECT: "Contraseña incorrecta!",
    FIRST: "Primer Nombre",
    LAST: "Apellido",
    POSTEDBY: "Publicado por: ",
    LOC: "Ubicación: ",
    SUM: "Resumen de habilidades: ",
    LANGUAGES: "Lenguages: ",
    POSTEDON: "Publicado el: ",
    REPLYPROF: "Contacto ",
    PHONE: "Número de teléfono",
    PROFSAVAL: "Algunos perfiles: ",
    CHATLOG: "Bienvenido al chat, ",
    SCROLL: "Desplazar hacia abajo para comenzar"
  });
  $translateProvider.useLoader('asyncLoader');
  $translateProvider.preferredLanguage('en');
  $translateProvider.useCookieStorage();
  $translateProvider.useLocalStorage();
}]);
app.factory('asyncLoader', function($q, $timeout) {
  return function(options) {
    var deferred = $q.defer(),
      translations;
    if (options.key === 'en') {
      translations = translationsEN;
    } else {
      translations = translationsES;
    }
    $timeout(function() {
      deferred.resolve(translations);
    }, 0);
    return deferred.promise;
  };
});