import './home.css';

function Home(){
    return <div  id="parent">
        <main class="main-window">
            <nav>
                <ol class="nav-list">
                    <li class="back-button material-symbols-outlined">
                        chevron_left
                    </li>
                    <li class="forward-button material-symbols-outlined">
                        chevron_right
                    </li>
                    <li class="search-button">
                        <search class="material-symbols-outlined">
                            search
                        </search>
                    </li>
                </ol>
            </nav>
            <header class="top-portion">
                <h1>the pool</h1>
            </header>
            <div class="headboard">
                <button class="btn-1 material-symbols-outlined">
                    play_circle
                </button>
                <button class="btn-2">
                    
                </button>
                <button class="btn-3 material-symbols-outlined">
                    lists
                </button>
            </div>
            <section class="track-listing">
                <ol class="track-table">
                    <li class="table-header">
                        <span>#</span>
                        <span>title</span>
                        <span>collection</span>
                        <span>genre</span>
                        <span>last session</span>
                        <span>length</span>
                    </li>
                    <li>
                        <span>005</span>
                        <span class="bright-text chubby">Bates Motel</span>
                        <span>Bates Motel</span>
                        <span>Alternative Rock, Pop Rock</span>
                        <span>Yesterday</span>
                        <span>3:12</span>
                    </li>
                    <li>
                        <span>008</span>
                        <span class="bright-text chubby">Backwoods</span>
                        <span>Backwoods</span>
                        <span>Indie Rock</span>
                        <span>3 months ago</span>
                        <span>4:51</span>
                    </li>
                    <li>
                        <span>020</span>
                        <span class="bright-text chubby">Criminal Conduct</span>
                        <span>The Black Tapes EP</span>
                        <span>Grunge</span>
                        <span>2 hours ago</span>
                        <span>2:51</span>
                    </li>
                    <li>
                        <span>022</span>
                        <span class="bright-text chubby">The Omen</span>
                        <span>You'll Cowards Don't Even Smoke Crack</span>
                        <span>Emo</span>
                        <span>30 seconds ago</span>
                        <span>1:30</span>
                    </li>
                    <li>More things</li>
                    <li>More things</li>
                    <li>More things</li>
                    <li>More things</li>
                    <li>More things</li>
                    <li>More things</li>
                    <li>More things</li>
                    <li>More things</li>
                    <li>More things</li>
                    <li>More things</li>
                    <li>More things</li>
                    <li>More things</li>
                    <li>More things</li>
                    <li>More things</li>
                    <li>More things</li>
                    <li>More things</li>
                    <li>More things</li>
                    <li>More things</li>
                    <li>More things</li>
                    <li>More things</li>
                    <li>More things</li>
                    <li>More things</li>
                    <li>More things</li>
                    <li>More things</li>
                    <li>More things</li>
                    <li>More things</li>
                    <li>More things</li>
                    <li>More things</li>
                </ol>
            </section>
        </main>
        <div class="sidebar">
            <ul class="sidebar-menu">
                <div class="top-panel">
                    <li class="bright-text logo">
                        theblackpool
                    </li>
                    <li class="thick link sidebar-row">
                        <span id="home-icon" class="material-symbols-outlined sidebar-icon">
                            home
                        </span>
                        <span id="home-link" class="sidebar-link">
                            home
                        </span>
                    </li>
                    <li class="thick link sidebar-row">
                        <span id="pool-icon" class="material-symbols-outlined sidebar-icon">
                            water
                        </span>
                        <span id="pool-link" class="sidebar-link">
                            the pool
                        </span>
                    </li>
                </div>

                <div class="mid-panel">
                    <li>
                        <span class="thick link sidebar-row">
                            <span id="library-icon" class="material-symbols-outlined sidebar-icon">
                                account_balance
                            </span>
                            <span id="library-link" class="sidebar-link">
                                the library
                            </span>
                            <button class="material-symbols-outlined sidebar-icon add-button">
                                add
                            </button>
                        </span>
                    </li>
                    <li>
                        <ol class="sidebar-submenu">
                            <li class="directory-row link">
                                <span class="material-symbols-outlined sidebar-icon">
                                    chevron_right
                                </span>
                                <span class="sidebar-link">
                                    Super Active Projects
                                </span>
                            </li>
                            <li class="directory-row link">
                                <span class="material-symbols-outlined sidebar-icon">
                                    chevron_right
                                </span>
                                <span class="sidebar-link">
                                    Reaper
                                </span>
                            </li>
                            <li class="directory-row link">
                                <span class="material-symbols-outlined sidebar-icon">
                                    chevron_right
                                </span>
                                <span class="sidebar-link">
                                    Reason
                                </span>
                            </li>
                        </ol>
                    </li>
                </div>
                
                <div class="bottom-panel">
                    <li>
                        <span class="thick sidebar-row">
                            <span id="collection-icon" class="material-symbols-outlined sidebar-icon">
                                hive
                            </span>
                            <span id="collection-link" class="sidebar-link">
                                the collection
                            </span>
                            <button class="material-symbols-outlined sidebar-icon add-button">
                                add
                            </button>
                        </span>
                    </li>
                    <li>
                        <ol class="sidebar-submenu">
                            <li class="thick link">
                                The Black Tapes EP
                            </li>
                            <li class="thick link">
                                You'll Cowards Don't Even Smoke Crack
                            </li>
                        </ol>
                    </li>
                </div>
            </ul>
        </div>
        <footer class="footer-thing-at-the-bottom">
            <video autoPlay muted loop id="myVideo">
                <source src="../images/Layx (1).mp4" type="video/mp4" />
                </video>
        </footer>
    </div>
}

export default Home;