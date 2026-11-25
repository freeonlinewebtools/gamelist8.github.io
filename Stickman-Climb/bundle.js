/* ubg: Poki ad SDK removed, no-op shim (same as scripts/recover-game.js STRIPS "Poki ad SDK") */
window.PokiSDK=new Proxy({init:function(){return Promise.resolve()},rewardedBreak:function(){return Promise.resolve(false)}},{get:function(t,k){return k in t?t[k]:function(){return Promise.resolve()}}});
