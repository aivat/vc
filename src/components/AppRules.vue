<template>
    <div class="rules">
        <div class="rules-wrap">
            <div class="rules-wrap-two">
                <span class="rules-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="7 0 24 24">
                        <circle cx="12" cy="19" r="2"/>
                        <path d="M10 3h4v12h-4z"/>
                        <path fill="none" d="M0 0h24v24H0z"/>
                    </svg>
                </span>
                <span class="rules-logo">Подсказка:</span>
                <span class="rules-text">
                    <slot></slot>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.rules {
    backdrop-filter: blur(2px);
    background-color: white;
    z-index: 10;
}
span {
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
}
.rules-logo {
    position: relative;
    left: -10px;
    
}
.rules-svg {
    display: inline-block;
    height: 20px;
    width: 20px;
    vertical-align: top;
}
svg {
    fill: rgba(217, 48, 37, 1);
}
.rules-text {
    color: rgb(241, 35, 21);
    min-height: 0;
}
.rules-wrap-two {
    position: relative;
    padding: 7px 0;
}
.rules-wrap-two:before {
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    -webkit-box-shadow: inset 0 -1px 0 0 rgba(100,121,143,0.122);
    box-shadow: inset 0 -1px 0 0 rgba(100,121,143,0.122);
    content: '';
    display: block;
    position: absolute;
}
.rules-wrap-two:after {
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    -webkit-box-shadow: inset 0 1px 0 0 rgba(100,121,143,0.122);
    box-shadow: inset 0 1px 0 0 rgba(100,121,143,0.122);
    content: '';
    display: block;
    position: absolute;
}

@media (min-width: 1280px) {
    .rules {
        position: sticky;
        top: 52px;    
        transition: height .2s ease-in;
        height: 34px;
        /* box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 3px -1px; */
    }
    .max {
        /* transition: height .15s ease-in; */
        height: 54px;
        /* animation-name: lineInserted; */
    }
    span {
        font-size: 16px;
    }
    @keyframes lineInserted {
    from {
        height: 30px;
    }
    to {
        height: 50px;
    }
    }
}
</style>