watch(%r{src/([^_].*)\.slim$}) {|m|
  p m
  `slimrb -p #{m[0]} ./dist/#{m[1]}.html`
}
