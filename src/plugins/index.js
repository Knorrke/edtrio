
        /*eslint react/display-name:0*/
        import React from 'react';
        import Loadable from 'react-loadable';
        import makePlugin from 'x-editor/editor/components/PluginWrapper';

        export default [
            
    {
        Plugin: Loadable({
            loader: () => import('./DummyPlugin/DummyPlugin.jsx').then(object => makePlugin(object.default, {"name":"Dummy Plugin","version":"0.1.0","description":"Empty Plugin for testing purposes","type":"CONTENT"})),
            loading: () => (
                <p>Lädt</p>
            )
        }),
        info: {"name":"Dummy Plugin","version":"0.1.0","description":"Empty Plugin for testing purposes","type":"CONTENT"},
    },
    {
        Plugin: Loadable({
            loader: () => import('./LayoutPlugin/LayoutPlugin.jsx').then(object => makePlugin(object.default, {"name":"Layout Plugin","version":"0.1.0","description":"Two column layout","type":"LAYOUT"})),
            loading: () => (
                <p>Lädt</p>
            )
        }),
        info: {"name":"Layout Plugin","version":"0.1.0","description":"Two column layout","type":"LAYOUT"},
    },
    {
        Plugin: Loadable({
            loader: () => import('./LinePlugin/LinePlugin.jsx').then(object => makePlugin(object.default, {"name":"Horizontal Line Plugin","version":"0.1.0","description":"Thematic brake","type":"CONTENT"})),
            loading: () => (
                <p>Lädt</p>
            )
        }),
        info: {"name":"Horizontal Line Plugin","version":"0.1.0","description":"Thematic brake","type":"CONTENT"},
    },
    {
        Plugin: Loadable({
            loader: () => import('./MissingPlugin/MissingPlugin.jsx').then(object => makePlugin(object.default, {"name":"Missing Plugin","version":"0.1.0","type":"CONTENT"})),
            loading: () => (
                <p>Lädt</p>
            )
        }),
        info: {"name":"Missing Plugin","version":"0.1.0","type":"CONTENT"},
    },
    {
        Plugin: Loadable({
            loader: () => import('./SyntaxHighlight/SyntaxHighlight.jsx').then(object => makePlugin(object.default, {"name":"Syntax Highlight","version":"0.1.0","description":"Syntax Highlight Plugin","type":"CONTENT"})),
            loading: () => (
                <p>Lädt</p>
            )
        }),
        info: {"name":"Syntax Highlight","version":"0.1.0","description":"Syntax Highlight Plugin","type":"CONTENT"},
    }
        ]
    