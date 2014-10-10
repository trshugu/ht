watch(%r{src/([^_].*)\.slim$}) {|m|
  p m
  `slimrb -p #{m[0]} ./dest/#{m[1]}.html`
}
