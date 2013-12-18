watch(/(.*).html.slim/) {|m| `slimrb -p #{m[0]} #{m[1]}.html` }

