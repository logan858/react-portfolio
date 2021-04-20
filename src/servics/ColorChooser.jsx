import React from 'react'

export function colorChooser() {
    let colors = "01234456789ABCDEF"
    let num = "#"
    for(let i = 0; i < 6; i++) {
        num = num + colors[Math.floor(Math.random() * 16)]
    }
    return num;
}