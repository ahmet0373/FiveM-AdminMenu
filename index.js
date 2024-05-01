
// // event listener
// window.addEventListener('message', function(event) {
//     func = event.data.daten.func;
//     daten = event.data.daten
//     myFuncs[func](daten);
//     console.log(JSON.stringify(daten))
// })

// funcs for event listener

var spieler = [
    
        {
            "name" : "Miha Nowotny",
            "online_zeit" : "12h 40min",
            "id" : "342",
            "discord_id" : "346521",
            "job" : "Diaz Cartel"
        },
        {
            "name" : "Miha Nowotny",
            "online_zeit" : "12h 40min",
            "id" : "342",
            "discord_id" : "346521",
            "job" : "Diaz Cartel"
        },
        {
            "name" : "Miha Nowotny",
            "online_zeit" : "12h 40min",
            "id" : "342",
            "discord_id" : "346521",
            "job" : "Diaz Cartel"
        },
        {
            "name" : "Miha Nowotny",
            "online_zeit" : "12h 40min",
            "id" : "342",
            "discord_id" : "346521",
            "job" : "Diaz Cartel"
        },
        {
            "name" : "Miha Nowotny",
            "online_zeit" : "12h 40min",
            "id" : "342",
            "discord_id" : "346521",
            "job" : "Diaz Cartel"
        },
        {
            "name" : "Miha Nowotny",
            "online_zeit" : "12h 40min",
            "id" : "342",
            "discord_id" : "346521",
            "job" : "Diaz Cartel"
        },
        {
            "name" : "Miha Nowotny",
            "online_zeit" : "12h 40min",
            "id" : "342",
            "discord_id" : "346521",
            "job" : "Diaz Cartel"
        },
        {
            "name" : "Miha Nowotny",
            "online_zeit" : "12h 40min",
            "id" : "342",
            "discord_id" : "346521",
            "job" : "Diaz Cartel"
        },
        {
            "name" : "Miha Nowotny",
            "online_zeit" : "12h 40min",
            "id" : "342",
            "discord_id" : "346521",
            "job" : "Diaz Cartel"
        },
        {
            "name" : "Miha Nowotny",
            "online_zeit" : "12h 40min",
            "id" : "342",
            "discord_id" : "346521",
            "job" : "Diaz Cartel"
        },
        {
            "name" : "Miha Nowotny",
            "online_zeit" : "12h 40min",
            "id" : "342",
            "discord_id" : "346521",
            "job" : "Diaz Cartel"
        }
    
]

var autos = [
    
    {
        "owner" : "Miha Nowotny",
        "kennzeichen" : "HSU373",
        "herkunft" : "shop",
        "status" : "ausgeparkt"
    },
    {
        "owner" : "Miha Nowotny",
        "kennzeichen" : "HSU373",
        "herkunft" : "shop",
        "status" : "ausgeparkt"
    },
    {
        "owner" : "Miha Nowotny",
        "kennzeichen" : "HSU373",
        "herkunft" : "shop",
        "status" : "ausgeparkt"
    },
    {
        "owner" : "Miha Nowotny",
        "kennzeichen" : "HSU373",
        "herkunft" : "shop",
        "status" : "ausgeparkt"
    },
    {
        "owner" : "Miha Nowotny",
        "kennzeichen" : "HSU373",
        "herkunft" : "shop",
        "status" : "ausgeparkt"
    },
    {
        "owner" : "Miha Nowotny",
        "kennzeichen" : "HSU373",
        "herkunft" : "shop",
        "status" : "ausgeparkt"
    },
    {
        "owner" : "Miha Nowotny",
        "kennzeichen" : "HSU373",
        "herkunft" : "shop",
        "status" : "ausgeparkt"
    },
    {
        "owner" : "Miha Nowotny",
        "kennzeichen" : "HSU373",
        "herkunft" : "shop",
        "status" : "ausgeparkt"
    },
    {
        "owner" : "Miha Nowotny",
        "kennzeichen" : "HSU373",
        "herkunft" : "shop",
        "status" : "ausgeparkt"
    },
    {
        "owner" : "Miha Nowotny",
        "kennzeichen" : "HSU373",
        "herkunft" : "shop",
        "status" : "ausgeparkt"
    },
    {
        "owner" : "Miha Nowotny",
        "kennzeichen" : "HSU373",
        "herkunft" : "shop",
        "status" : "ausgeparkt"
    }
]
var sprache  = {
    "decimal":        "",
    "emptyTable":     "No data available in table",
    "info":           "_START_ bis _END_ von _TOTAL_ Einträge",
    "infoEmpty":      "Showing 0 to 0 of 0 entries",
    "infoFiltered":   "(filtered from _MAX_ total entries)",
    "infoPostFix":    "",
    "thousands":      ",",
    "lengthMenu":     "Show _MENU_ entries",
    "loadingRecords": "Loading...",
    "processing":     "",
    "search":         "Suche:",
    "zeroRecords":    "No matching records found",
    "aria": {
        "orderable":  "Order by this column",
        "orderableReverse": "Reverse order this column"
    }
}

var myFuncs = {
    enablehud: function (daten) {
        $('body').css("display","flex");
        buildcontainers(); // start build all containers with daten
    },
    closehud: function (daten) {
        $('body').css("display","none");
    },
    reloadhud: function (daten) {
      stopAllTimers()
      buildcontainers(daten)
  },
}
// Popup fenster für die Spieler
function modal_spieler(daten){
    var blur = $('#main_hud');
    blur.addClass('blur');

    var popupContent = `
        <div class="popup">
            <div class="popup-content">
            <span class="close material-icons-sharp">close</span>
            
                    <aside id="nav">
                        <div class="sidebar-pop">
                            
            
                            <a id="actions" class="menuselect active" onclick="button2('actions')" href="#">
                                <span class="material-icons-sharp">bolt</span>
                                <h3>Actions</h3>
                            </a>
            
                            <a id="infos" class="menuselect" onclick="button2('infos')" href="#">
                                <span class="material-icons-sharp">account_circle</span>
                                <h3>infos</h3>
                            </a>
            
                            <a id="ids" class="menuselect" onclick="button2('ids')" href="#">
                                <span class="material-icons-sharp">format_list_bulleted</span>
                                <h3>IDs</h3>
                            </a>
            
            
                            <a id="history" class="menuselect" onclick="button2('history')" href="#">
                                <span class="material-icons-sharp">history</span>
                                <h3>History</h3>
                            </a>

                            <a id="ban" class="menuselect" onclick="button2('ban')" href="#">
                                <span class="material-icons-sharp">not_interested</span>
                                <h3>Ban</h3>
                            </a>
            
            
                        </div>
        
                    </aside>
                    
                    <div id="popup_action">
                        <!-- generated content -->
                    </div>
                    
            </div>
        </div>
    `;
    
    
    $('body').append(popupContent); 

    button2("actions");

    $(document).mouseup(function(e) {
        var popup = $('.popup-content');
        if (!popup.is(e.target) && popup.has(e.target).length === 0) {
            $('.popup').remove();
            blur.removeClass('blur');
        }
    });
    
    $('.close').click(function() {
        $('.popup').remove();
        blur.removeClass('blur');
    });
}
// Popup fenster für die autos
function modal_autos(daten){
    var blur = $('#main_hud');
    blur.addClass('blur');

    var popupContent = `
        <div class="popup">
            <div class="popup-content">
            <span class="close material-icons-sharp">close</span>
            
                    <aside id="nav">
                        <div class="sidebar-pop">
                            
            
                            <a id="actions" class="menuselect active" onclick="button3('infos')" href="#">
                                <span class="material-icons-sharp">bolt</span>
                                <h3>infos</h3>
                            </a>
            
                            <a id="infos" class="menuselect" onclick="button3('actions')" href="#">
                                <span class="material-icons-sharp">account_circle</span>
                                <h3>Actions</h3>
                            </a>
                        </div>
        
                    </aside>
                    
                    <div id="popup_action2">
                        <!-- generated content -->
                    </div>
                    
            </div>
        </div>
    `;
    
    
    $('body').append(popupContent); 

    button3("infos");

    $(document).mouseup(function(e) {
        var popup = $('.popup-content');
        if (!popup.is(e.target) && popup.has(e.target).length === 0) {
            $('.popup').remove();
            blur.removeClass('blur');
        }
    });
    
    $('.close').click(function() {
        $('.popup').remove();
        blur.removeClass('blur');
    });
}


function buildcontainers() {
    // standard load


    fillcon2_left_list()
    

    
    
    $('#con2_right').css("display","none")

    const themeToggler = document.querySelector(".theme-toggler");
    const adminToggler = document.querySelector(".admin-toggler");

    themeToggler.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme-variables');

        themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
        themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');  
    })

    adminToggler.addEventListener('click', () => {
        document.body.classList.toggle('admin-variables');

        adminToggler.querySelector('span:nth-child(1)').classList.toggle('active');
        adminToggler.querySelector('span:nth-child(2)').classList.toggle('active');  
    })
    
}


function copyToClipboard(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}

// Popup für die Spieler

function fillpopup_action(){
    $('#popup_action').html(`
        <div class="pop-info">      
            <h2>Spieler Aktionen</h2>
            <h3>Moderation</h3>
            <div class="pop-mod">
                <button class="pop-button">DM</button>
                <button class="pop-button">WARN</button>
                <button class="pop-button">KICK</button>
                <button class="pop-button">GIVE ADMIN</button>
            </div>
            <h3>Tnteraction</h3>
            <div class="pop-mod">
                <button class="pop-button">heal</button>
                <button class="pop-button">GO TO</button>
                <button class="pop-button">bring</button>
                <button class="pop-button">spectate</button>
                <button class="pop-button">toggle freeze</button>
            </div>
            <h3>Troll</h3>
            <div class="pop-mod">
                <button class="pop-button">make drunk</button>
                <button class="pop-button">set fire</button>
                <button class="pop-button">wild attack</button>
            </div>
        </div>
    `)
}

function fillpopup_info(){
    $('#popup_action').html(`
        <div class="pop-info-info">      
            <h2>Spieler info</h2>
            <h3>Session Time: <a>15 Minuten</a></h3>
            <h3>Play Time: <a>3 day, 12 hours, 23 minutes</a></h3>
            <h3>Joined: <a>Apirl 28, 2024 - 18:49:23</a></h3>
            
            <h3>Notizen über den spieler</h3>
            <div class="pop-note">
                <textarea rows="4" cols="50" style="width: 100%;" placeholder="Notizen eingeben"></textarea>
                <button class="pop-button">Speichern</button>
            </div>
        </div>
    `)
}

function fillpopup_ids(){
    $('#popup_action').html(`
        <div class="pop-info">      
            <div class="ids">
                <h4>licende:asdfsdf789d6f7ds6f7d7f8d7sfd8f787824h32g47</h4>
                <span class="material-icons-sharp copy-icon">content_copy</span>
            </div>
            <div class="ids">
                <h4>xbl:34563453625752324</h4>
                <span class="material-icons-sharp copy-icon">content_copy</span>
            </div>
            <div class="ids">
                <h4>live:4534534578998457</h4>
                <span class="material-icons-sharp copy-icon">content_copy</span>
            </div>
            <div class="ids">
                <h4>discord:346759829837478968958</h4>
                <span class="material-icons-sharp copy-icon">content_copy</span>
            </div>
            <div class="ids">
                <h4>fivem:68538380</h4>
                <span class="material-icons-sharp copy-icon">content_copy</span>
            </div>
        </div>
`);

    $('.copy-icon').click(function() {
        var textToCopy = $(this).prev('h4').text();
        copyToClipboard(textToCopy);
    });
}

function fillpopup_history(){
    $('#popup_action').html(`
        <div class="pop-info">      
            <h2>Related History</h2>
            <h3>no history found for this player</h3>
        </div>
    `)
}

function fillpopup_ban(){
    

    $('#popup_action').html(`
        <div class="pop-info-ban">      
            <h2>Ban player</h2>
            <h3>reason</h3>
            <input class="ban-reason"></input>
            <h3>duration</h3>
            <div class="dropdown">
                <div class="select">
                    <span class="selected">2 hours</span>
                    <div class="caret"></div>
                </div>
                <ul class="menu">
                    <li class="active">2 hours</li>
                    <li>4 hours</li>
                    <li>16 hours</li>
                    <li>24 hours</li>
                    <li>3 days</li>
                    <li>7 days</li>
                    <li>14 days</li>
                    <li>30 days</li>
                    <li>Perma</li>
                </ul>
            </div>

            <button class="pop-button">Ban</button>

        </div>

    `)

    $('#popup_action .dropdown').on('click', '.menu li', function() {
        var selected = $(this).text();
        $(this).closest('.dropdown').find('.selected').text(selected);
        $(this).addClass('active').siblings().removeClass('active');
        
        
        $(this).closest('.menu').removeClass('menu-open');
        $(this).closest('.select').removeClass('select-clicked');
        $(this).closest('.select').find('.caret').removeClass('caret-rotate');
    });

    
    $('#popup_action .dropdown .select').click(function() {
        $(this).toggleClass('select-clicked');
        $(this).find('.caret').toggleClass('caret-rotate');
        $(this).siblings('.menu').toggleClass('menu-open');
    });
}

function button2(type) {

    if (type == "actions") {
        fillpopup_action() 
        $('.menuselect').removeClass('active');
        $('#actions').addClass('active');

    } else if (type == "infos") {
        fillpopup_info()
        $('.menuselect').removeClass('active');
        $('#infos').addClass('active');
    } else if (type == "ids"){
        fillpopup_ids()
        $('.menuselect').removeClass('active');
        $('#ids').addClass('active');
    } else if (type == "history"){
        fillpopup_history()
        $('.menuselect').removeClass('active');
        $('#history').addClass('active');
        
    }else if (type == "ban"){
        fillpopup_ban()
        $('.menuselect').removeClass('active');
        $('#ban').addClass('active');
        
    }
}

// Popup für die autos

function button3(type) {

    if (type == "infos") {
        fillpopup_auto_info() 
        $('.menuselect').removeClass('active');
        $('#actions').addClass('active');

    } else if (type == "actions") {
        fillpopup_auto_action()
        $('.menuselect').removeClass('active');
        $('#infos').addClass('active');
    } 
}

function fillpopup_auto_info(){
    $('#popup_action2').html(`
        <div class="pop-info">      
            <div class="ids">
                <h4>Modell: Audi RS6 ABT 2020</h4>
                <span class="material-icons-sharp copy-icon">content_copy</span>
            </div>
            <div class="ids">
                <h4>Käufer: Miha Nowotny</h4><h4>Preis: 120.000$</h4><h4>Datum: 01.05.2024</h4>
                <span class="material-icons-sharp copy-icon">content_copy</span>
            </div>
            <div class="ids">
                <h4>Standort: Garage Richman</h4>
                <span class="material-icons-sharp copy-icon">location_on</span>
            </div>
            <div class="ids">
                <h4>networkowner: Miha Nowotny</h4>
                <span class="material-icons-sharp copy-icon">content_copy</span>
            </div>
            <div class="ids">
                <h4>Herkunft: Autoshop</h4>
                <span class="material-icons-sharp copy-icon">content_copy</span>
            </div>
        </div>
    `)
}

function fillpopup_auto_action(){
    $('#popup_action2').html(`
        <div class="pop-info">      
            <h2>Auto Aktionen</h2>
            <h3>Moderation</h3>
            <div class="pop-mod">
                <button class="pop-button">GO TO</button>
                <button class="pop-button">Bring</button>
                <button class="pop-button">Spectate</button>
            </div>
            <h3>Interaction</h3>
            <div class="pop-mod">
                <button class="pop-button">Einparken</button>
                <button class="pop-button">Ausparken</button>
                <button class="pop-button">Abschleppen</button>
                <button class="pop-button">Löschen</button>
                <button class="pop-button">Copy</button>
            </div>
        </div>
    `)
}

// Haupt seite / container

function fillcon2_left_dash() {
    $('#con2_left').html(`
        <div class="mitte-oben">
            <div id="list" class="box1" onclick="button1('list')" href="#">      
                <span class="material-icons-sharp">groups</span>
                <div class="middle">
                    <div class="lef">
                        <h3>Spieler</h3>
                        <h1>434</h1>
                    </div>
                    <div class="progress">
                        <svg>
                            <circle cx="38" cy="38" r="36"></circle>
                        </svg>
                        <div class="number">
                            <p>51%</p>
                        </div>
                    </div>
                </div>
                <small class="text-muted">Aktuell</small>
            </div>
            <!-------------------------Ende erste block---------------------------->
            <div id="auto" class="box2" onclick="button1('autos')" href="#">
                <span class="material-icons-sharp">directions_car</span>
                <div class="middle">
                    <div class="lef">
                        <h3>Fahrzeuge</h3>
                        <h1>234</h1>
                    </div>
                    <div class="progress">
                        <svg>
                            <circle cx="38" cy="38" r="36"></circle>
                        </svg>
                        <div class="number">
                            <p>51%</p>
                        </div>
                    </div>
                </div>
                <small class="text-muted">Aktuell</small>
            </div>
            <!-------------------------Ende zweite block---------------------------->
            <div id="ticket" class="box3" onclick="button1('tickets')" href="#">
                <span class="material-icons-sharp">analytics</span>
                <div class="middle">
                    <div class="lef">
                        <h3>Tickets</h3>
                        <h1>34</h1>
                    </div>
                    <div class="progress">
                        <svg>
                            <circle cx="38" cy="38" r="36"></circle>
                        </svg>
                        <div class="number">
                            <p>71%</p>
                        </div>
                    </div>
                </div>
                <small class="text-muted">Aktuell</small>
            </div>
            <!-------------------------Ende dritter block---------------------------->
        </div>

        <!-------------------------Ende insight---------------------------->
        <div class="box-mitte">
            <h2>Letzer Spieler</h2>
            <table>
                <thead>
                    <tr>
                        <th>Spieler Name</th>
                        <th>Discord ID</th>
                        <th>ID</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Miha Nowotny</td>
                        <td>1235423</td>
                        <td>34</td>
                        <td>Diaz Cartel</td>
                        <td class="primary">Details</td>
                    </tr>
                    <tr>
                        <td>Miha Nowotny</td>
                        <td>1235423</td>
                        <td>34</td>
                        <td>Diaz Cartel</td>
                        <td class="primary">Details</td>
                    </tr>
                    <tr>
                        <td>Miha Nowotny</td>
                        <td>1235423</td>
                        <td>34</td>
                        <td>Diaz Cartel</td>
                        <td class="primary">Details</td>
                    </tr>
                    <tr>
                        <td>Miha Nowotny</td>
                        <td>1235423</td>
                        <td>34</td>
                        <td>Diaz Cartel</td>
                        <td class="primary">Details</td>
                    </tr>
                    <tr>
                        <td>Miha Nowotny</td>
                        <td>1235423</td>
                        <td>34</td>
                        <td>Diaz Cartel</td>
                        <td class="primary">Details</td>
                    </tr>
                    <tr>
                        <td>Miha Nowotny</td>
                        <td>1235423</td>
                        <td>34</td>
                        <td>Diaz Cartel</td>
                        <td class="primary">Details</td>
                    </tr>
                    <tr>
                        <td>Miha Nowotny</td>
                        <td>1235423</td>
                        <td>34</td>
                        <td>Diaz Cartel</td>
                        <td class="primary">Details</td>
                    </tr>

                </tbody>
            </table>
            <!---<a href="#">Mehr Anzeigen</a>---->
        </div>
    `)
}
function fillcon2_left_controls() {
    $('#con2_left').html(`
    <div class="mitte-oben">
        <div id="list" class="box1" onclick="button1('list')" href="#">
            <span class="material-icons-sharp">admin_panel_settings</span>
            <div class="middle">
                <div class="lef">
                    <h3>Admins</h3>
                    <h1>434</h1>
                </div>
                <div class="progress">
                    <svg>
                        <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div class="number">
                        <p>51%</p>
                    </div>
                </div>
            </div>
            <small class="text-muted">Aktuell</small>
        </div>
        <!-------------------------Ende erste block---------------------------->
        <div class="box2">
            <span class="material-icons-sharp">no_accounts</span>
            <div class="middle">
                <div class="lef">
                    <h3>Admin Off Duty</h3>
                    <h1>234</h1>
                </div>
                <div class="progress">
                    <svg>
                        <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div class="number">
                        <p>51%</p>
                    </div>
                </div>
            </div>
            <small class="text-muted">Aktuell</small>
        </div>
        <!-------------------------Ende zweite block---------------------------->
        <div class="box3">
            <span class="material-icons-sharp">account_circle</span>
            <div class="middle">
                <div class="lef">
                    <h3>Admin On Duty</h3>
                    <h1>34</h1>
                </div>
                <div class="progress">
                    <svg>
                        <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div class="number">
                        <p>71%</p>
                    </div>
                </div>
            </div>
            <small class="text-muted">Aktuell</small>
        </div>
        <!-------------------------Ende dritter block---------------------------->
    </div>

    <!-------------------------Ende insight---------------------------->
    <div class="box-mitte-controls">
        <h2>Aktionen</h2>
          <div class="table-container">  
                <table class="controlst1">
                    <thead>
                        <tr>
                            <th>Shortcuts</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><button class="aktionb">Admin Duty</button></td>
                        </tr>
                        <tr>
                            <td><button class="aktionb">Admin Suite</button></td>
                        </tr>
                        <tr>
                            <td><button class="aktionb">Noclip</button></td>
                        </tr>
                        <tr>
                            <td><button class="aktionb">Nametags</button></td>
                        </tr>
                        <tr>
                            <td><button class="aktionb">TP to WP</button></td>
                        </tr>
                        <tr>
                            <td><button class="aktionb">coming soon</button></td>
                        </tr>
                        <tr>
                            <td><button class="aktionb">coming soon</button></td>
                        </tr>

                    </tbody>
                </table>

                <table class="controlst2">
                    <thead>
                        <tr>
                            <th>My ID</th>
                            <th>Item</th>
                            <th>Amount</th>
                            <th>To ID</th>
                            <th>Give</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="text" name="my_id" placeholder="Your ID"></td>
                            <td><input type="text" name="amount" placeholder="Items"></td>
                            <td><input type="text" name="to_id" placeholder="Amount"></td>
                            <td><input type="text" name="my_id" placeholder="To ID"></td>
                            <td><button class="aktionb">Give</button></td>
                        </tr>
                        <tr>
                            <td><b>My ID<b></td>
                            <td><b>Money<b></td>
                            <td><b>Amount<b></td>
                            <td><b>To ID<b></td>
                            <td><b>Give<b></td>
                        </tr>
                        <tr>
                            <td><input type="text" name="my_id" placeholder="Your ID"></td>
                            <td><input type="text" name="amount" placeholder="Geld"></td>
                            <td><input type="text" name="to_id" placeholder="Amount"></td>
                            <td><input type="text" name="my_id" placeholder="To ID"></td>
                            <td><button class="aktionb">Give</button></td>
                        </tr>
                        <tr>
                            <td><b>My ID<b></td>
                            <td><b>Weapon<b></td>
                            <td><b>Job<b></td>
                            <td><b>To ID<b></td>
                            <td><b>Give<b></td>
                        </tr>
                        <tr>
                            <td><input type="text" name="my_id" placeholder="Your ID"></td>
                            <td><input type="text" name="amount" placeholder="Weapon"></td>
                            <td><input type="text" name="to_id" placeholder="job"></td>
                            <td><input type="text" name="my_id" placeholder="To ID"></td>
                            <td><button class="aktionb">Give</button></td>
                        </tr>
                        <tr>
                            <td><b>My ID<b></td>
                            <td><b>Vehicle<b></td>
                            <td><b>Job<b></td>
                            <td><b>To ID<b></td>
                            <td><b>Give<b></td>
                        </tr>
                        <tr>
                            <td><input type="text" name="my_id" placeholder="Your ID"></td>
                            <td><input type="text" name="amount" placeholder="Fahrzeug"></td>
                            <td><input type="text" name="to_id" placeholder="Job"></td>
                            <td><input type="text" name="my_id" placeholder="To ID"></td>
                            <td><button class="aktionb">Give</button></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        <!---<a href="#">Mehr Anzeigen</a>---->
    </div>
`)
}
function fillcon2_left_list() {
    $('#con2_left').html(`
    <div class="mitte-oben">
        <div id="list" class="box1" onclick="button1('list')" href="#">      
            <span class="material-icons-sharp">groups</span>
            <div class="middle">
                <div class="lef">
                    <h3>Spieler</h3>
                    <h1>434</h1>
                </div>
                <div class="progress">
                    <svg>
                        <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div class="number">
                        <p>51%</p>
                    </div>
                </div>
            </div>
            <small class="text-muted">Aktuell</small>
        </div>
<!-------------------------Ende erste block---------------------------->
        <div id="auto" class="box2" onclick="button1('autos')" href="#">
            <span class="material-icons-sharp">directions_car</span>
            <div class="middle">
                <div class="lef">
                    <h3>Fahrzeuge</h3>
                    <h1>234</h1>
                </div>
                <div class="progress">
                    <svg>
                        <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div class="number">
                        <p>51%</p>
                    </div>
                </div>
            </div>
            <small class="text-muted">Aktuell</small>
        </div>
        <!-------------------------Ende zweite block---------------------------->
        <div id="ticket" class="box3" onclick="button1('tickets')" href="#">
            <span class="material-icons-sharp">analytics</span>
            <div class="middle">
                <div class="lef">
                    <h3>Tickets</h3>
                    <h1>34</h1>
                </div>
                <div class="progress">
                    <svg>
                        <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div class="number">
                        <p>71%</p>
                    </div>
                </div>
            </div>
            <small class="text-muted">Aktuell</small>
        </div>
        <!-------------------------Ende dritter block---------------------------->
    </div>

    <!-------------------------Ende insight---------------------------->
    <div class="box-mitte">
        
        <table id="spielerTable" class="display" width="100%">
        
            
        </table>
        <!---<a href="#">Mehr Anzeigen</a>---->
    </div>
`)

let toolbar = document.createElement('div');
toolbar.innerHTML = '<h2>Spieler Liste</h2>';

let Table = $('#spielerTable').DataTable({
    pageLength: 7, 
    lengthChange: false,
    language: sprache,
    layout: {
        topStart: toolbar
    },
    data : spieler,
    'columns' : [
        {data : 'id'},
        {data : 'name'},
        {data : 'online_zeit'},
        {data : 'discord_id'},
        {data : 'job'},
        {data : 'id'}
    ],
    columnDefs: [
        
        {
            title: 'ID',
            targets: 0
        },
        {
            title: 'Name',
            targets: 1
        },
        {
            title: 'Online Zeit',
            targets: 2
        },
        {
            title: 'Discord ID',
            targets: 3
        },
        {
            title: 'Job',
            targets: 4
        },
        {
            title: '',
            targets: 5,
            sortable: false
        }
    ]
});

Table.on("draw", function() {
    if (Table.column(5).nodes()) {
        Table.column(5).nodes().each(function(cell, i) {
            var taskid = $(cell).text().trim();
            $(cell).html(`
            
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16" onclick="modal_spieler(${taskid})">
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                </svg>
            
            `);
        });    
    }    
       
})

Table.draw();

}
function fillcon2_left_ticket() {
    $('#con2_left').html(`
    <div class="mitte-oben">
        <div id="list" class="box1" onclick="button1('list')" href="#">
            <span class="material-icons-sharp">groups</span>
            <div class="middle">
                <div class="lef">
                    <h3>Tickets</h3>
                    <h1>434</h1>
                </div>
                <div class="progress">
                    <svg>
                        <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div class="number">
                        <p>51%</p>
                    </div>
                </div>
            </div>
            <small class="text-muted">Aktuell</small>
        </div>
        <!-------------------------Ende erste block---------------------------->
        <div id="auto" class="box2" onclick="button1('autos')" href="#">
            <span class="material-icons-sharp">directions_car</span>
            <div class="middle">
                <div class="lef">
                    <h3>Offene Tickets</h3>
                    <h1>234</h1>
                </div>
                <div class="progress">
                    <svg>
                        <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div class="number">
                        <p>51%</p>
                    </div>
                </div>
            </div>
            <small class="text-muted">Aktuell</small>
        </div>
        <!-------------------------Ende zweite block---------------------------->
        <div id="ticket" class="box3" onclick="button1('tickets')" href="#">
            <span class="material-icons-sharp">analytics</span>
            <div class="middle">
                <div class="lef">
                    <h3>Abgeschlossene Tickets</h3>
                    <h1>34</h1>
                </div>
                <div class="progress">
                    <svg>
                        <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div class="number">
                        <p>71%</p>
                    </div>
                </div>
            </div>
            <small class="text-muted">Aktuell</small>
        </div>
        <!-------------------------Ende dritter block---------------------------->
    </div>

    <!-------------------------Ende insight---------------------------->
    <div class="box-mitte">
        <h2>Tickets</h2>
        <table>
            <thead>
                <tr>
                    <th>Spieler Name</th>
                    <th>Discord ID</th>
                    <th>ID</th>
                    <th>Job</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Miha Nowotny</td>
                    <td>1235423</td>
                    <td>34</td>
                    <td>Diaz Cartel</td>
                    <td class="primary">Details</td>
                </tr>
                <tr>
                    <td>Miha Nowotny</td>
                    <td>1235423</td>
                    <td>34</td>
                    <td>Diaz Cartel</td>
                    <td class="primary">Details</td>
                </tr>
                <tr>
                    <td>Miha Nowotny</td>
                    <td>1235423</td>
                    <td>34</td>
                    <td>Diaz Cartel</td>
                    <td class="primary">Details</td>
                </tr>
                <tr>
                    <td>Miha Nowotny</td>
                    <td>1235423</td>
                    <td>34</td>
                    <td>Diaz Cartel</td>
                    <td class="primary">Details</td>
                </tr>
                <tr>
                    <td>Miha Nowotny</td>
                    <td>1235423</td>
                    <td>34</td>
                    <td>Diaz Cartel</td>
                    <td class="primary">Details</td>
                </tr>
                <tr>
                    <td>Miha Nowotny</td>
                    <td>1235423</td>
                    <td>34</td>
                    <td>Diaz Cartel</td>
                    <td class="primary">Details</td>
                </tr>
                <tr>
                    <td>Miha Nowotny</td>
                    <td>1235423</td>
                    <td>34</td>
                    <td>Diaz Cartel</td>
                    <td class="primary">Details</td>
                </tr>

            </tbody>
        </table>
        <!---<a href="#">Mehr Anzeigen</a>---->
    </div>
`)
}

function fillcon2_left_auto() {
    $('#con2_left').html(`
    <div class="mitte-oben">
        <div id="list" class="box1" onclick="button1('list')" href="#">
            <span class="material-icons-sharp">groups</span>
            <div class="middle">
                <div class="lef">
                    <h3>Spieler</h3>
                    <h1>434</h1>
                </div>
                <div class="progress">
                    <svg>
                        <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div class="number">
                        <p>51%</p>
                    </div>
                </div>
            </div>
            <small class="text-muted">Aktuell</small>
        </div>
        <!-------------------------Ende erste block---------------------------->
        <div id="auto" class="box2" onclick="button1('autos')" href="#">
            <span class="material-icons-sharp">directions_car</span>
            <div class="middle">
                <div class="lef">
                    <h3>Autos</h3>
                    <h1>234</h1>
                </div>
                <div class="progress">
                    <svg>
                        <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div class="number">
                        <p>51%</p>
                    </div>
                </div>
            </div>
            <small class="text-muted">Aktuell</small>
        </div>
        <!-------------------------Ende zweite block---------------------------->
        <div id="ticket" class="box3" onclick="button1('tickets')" href="#">
            <span class="material-icons-sharp">analytics</span>
            <div class="middle">
                <div class="lef">
                    <h3>Tickets</h3>
                    <h1>34</h1>
                </div>
                <div class="progress">
                    <svg>
                        <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div class="number">
                        <p>71%</p>
                    </div>
                </div>
            </div>
            <small class="text-muted">Aktuell</small>
        </div>
        <!-------------------------Ende dritter block---------------------------->
    </div>

    <!-------------------------Ende insight---------------------------->
    <div class="box-mitte">
        
        <table id="autosTable" class="display" width="100%">
        
            
        </table>
        <!---<a href="#">Mehr Anzeigen</a>---->
    </div>
`)

let toolbar = document.createElement('div');
toolbar.innerHTML = '<h2>Auto Liste</h2>';

let TableAuto = $('#autosTable').DataTable({
    pageLength: 7, 
    lengthChange: false,
    language: sprache,
    layout: {
        topStart: toolbar
    },
    data : autos,
    'columns' : [
        {data : 'owner'},
        {data : 'kennzeichen'},
        {data : 'herkunft'},
        {data : 'status'},
        {data : 'kennzeichen'}
    ],
    columnDefs: [
        
        {
            title: 'Owner',
            targets: 0
        },
        {
            title: 'Kennzeichen',
            targets: 1
        },
        {
            title: 'Herkunft',
            targets: 2
        },
        {
            title: 'Status',
            targets: 3
        },
        {
            title: '',
            targets: 4,
            sortable: false
        }
    ]
});

TableAuto.on("draw", function() {
    if (TableAuto.column(4).nodes()) {
        TableAuto.column(4).nodes().each(function(cell, i) {
            var taskid = $(cell).text().trim();
            $(cell).html(`
            
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16" onclick="modal_autos('${taskid}')">
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                </svg>
            
            `);
        });    
    }    
       
})

TableAuto.draw();


}

function fillcon2_right() {
    $('#con2_right').html(`
        <div class="top">
            <div class="theme-toggler">
                <span class="material-icons-sharp active">light_mode</span>
                <span class="material-icons-sharp">dark_mode</span>
            </div>
            <div class="profile">
                <div class="info">
                    <p>Hey, <b>Miha</b></p>
                    <small class="text-muted">Admin</small>
                </div>
                <div class="profile-photo">
                    <img src="./images/user.png">
                </div>
            </div>
        </div>

        <div class="box-rechtss">
            <h2>Recent Tickets</h2>
            <div class="updates">
                <div class="update">
                    <div class="profile-photo">
                        <img src="./images/user.png">
                    </div>
                    <div class="message">
                        <p><b>Tobi Tyson </b>Ich brache hier hilfe bin stuck! ...</p>
                        <small class="text-muted">vor 15 Sekunden</small>
                    </div>
                </div>

                <div class="update">
                    <div class="profile-photo">
                        <img src="./images/user.png">
                    </div>
                    <div class="message">
                        <p><b>Miha Nowotny </b>Fail RP hier brauchen Supporter ...</p>
                        <small class="text-muted">vor 30 Sekunden</small>
                    </div>
                </div>

                <div class="update">
                    <div class="profile-photo">
                        <img src="./images/user.png">
                    </div>
                    <div class="message">
                        <p><b>Mike Singer </b>Die Leute hören mich nicht?! ...</p>
                        <small class="text-muted">vor 3 Minuten</small>
                    </div>

                </div>
                <div class="update">
                    <div class="profile-photo">
                        <img src="./images/user.png">
                    </div>
                    <div class="message">
                        <p><b>Tobi Tyson </b>Ich brache hier hilfe bin stuck! ...</p>
                        <small class="text-muted">vor 15 Sekunden</small>
                    </div>
                </div>

                <div class="update">
                    <div class="profile-photo">
                        <img src="./images/user.png">
                    </div>
                    <div class="message">
                        <p><b>Miha Nowotny </b>Fail RP hier brauchen Supporter ...</p>
                        <small class="text-muted">vor 30 Sekunden</small>
                    </div>
                </div>

                <div class="update">
                    <div class="profile-photo">
                        <img src="./images/user.png">
                    </div>
                    <div class="message">
                        <p><b>Mike Singer </b>Die Leute hören mich nicht?! ...</p>
                        <small class="text-muted">vor 3 Minuten</small>
                    </div>

                </div>
            </div>
        </div>
`)

const themeToggler = document.querySelector(".theme-toggler");


themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

}

// nav buttons
function button1(type) {

    if (type == "tickets") {
        fillcon2_left_ticket()
        $('#con2_right').css("display","none")
        $('.menuselect').removeClass('active');
        $('#tickets').addClass('active');

    } else if (type == "dashboard") {
        fillcon2_left_dash()
        $('#con2_right').css("display","block")
        $('.menuselect').removeClass('active');
        $('#dashboard').addClass('active');
    } else if (type == "autos"){
        fillcon2_left_auto()
        $('#con2_right').css("display","none")
        $('.menuselect').removeClass('active');;
    } else if (type == "list"){
        fillcon2_left_list()
        $('#con2_right').css("display","none")
        $('.menuselect').removeClass('active');
        
    }
}




buildcontainers()