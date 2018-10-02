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
    margin-top: 20px;
}
span {
    font-size: 16px;
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
    color: rgba(217, 48, 37, 1);
    transition: all .5s ease;
}
.rules-wrap-two {
    position: relative;
    padding: 5px 0;
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
    .rules-wrap {
        height: 50px;
    }
}
</style>