
<div class="scrollmenu">
    <a class="button button-dark tab-button">
        <svg width="100%" height="100%" viewBox="-10 -8 40 40" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path style="fill: #747474;" d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z"/>
        </svg>
    </a>
    <div class="menu-canvas">
        <div style="position: fixed;top: 0; left: 0; height: 2.2rem; width: .75rem;background-image: linear-gradient(to right, white, transparent)"></div>
        <div style="position: fixed;top: 0; right: 2.2rem; height: 2.2rem; width: .75rem;background-image: linear-gradient(to left, #ddd , white 30%, transparent)"></div>
        <div style="position: fixed;top: 0; right: 2.2rem; height: 2.2rem; width: .75rem;background-image: linear-gradient(to top, white , transparent 20%, transparent 80%, white )"></div>
        <div class="nav-indicator"></div>
    </div>

    <div>
        <div class="bar bar-header-secondary no-display">
            <div class="searchbar">
                <a class="searchbar-cancel">取消</a>
                <div class="search-input">
                    <label class="icon icon-search" for="search"></label>
                    <input type="search" id='search' placeholder='输入关键字...'/>
                </div>
            </div>
        </div>
        <?php
            foreach ($categories as $key => $value){
                $is_active = $key == $active_category? " active" : '';
                echo '<a class="menu-pills'. $is_active .'" href="#'.$key.'">'.$value.'</a>';
            }
        ?>
        <span class="dummy" style="padding: 0 0.75rem">&nbsp;</span>
        <div class="home-options no-display" style="float: left; width: 100%;">
            <div class="post-option-block">
                <p>字体大小</p>
                <p class="buttons-row">
                    <a href="#" class="button font-size-option small" target="1" style="font-size: 14px">小</a>
                    <a href="#" class="button font-size-option mid active" target="2" style="font-size: 16px">中</a>
                    <a href="#" class="button font-size-option large" target="3" style="font-size: 18px">大</a>
                </p>
            </div>
            <div class="post-option-block">
                <p>简繁切换</p>
                <p class="buttons-row">
                    <a class="translateLink button active" target="1" href="#">简体</a>
                    <a class="translateLink button" target="2" href="#">繁体</a>
                </p>
            </div>


            <div class="post-option-block theme">
                <p>
                <div class="pull-left" style="height: 1.6rem; line-height: 1.5rem">黑夜模式</div>
                <div class="pull-right">
                    <label class="label-switch" onclick="toggle_theme()" style="transform: scale(0.8,0.8);">
                        <input type="checkbox">
                        <div class="checkbox"></div>
                    </label>
                </div>
                </p>
            </div>
        </div>
    </div>
</div>




