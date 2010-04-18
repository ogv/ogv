" markdown filetype file
if exists("did\_load\_filetypes")
 finish
endif
augroup mkd
 au! BufRead,BufNewFile *.markdown   setfiletype mkd
augroup END
