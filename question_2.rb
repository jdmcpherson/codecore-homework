class Book
    def initialize(title, chapters)
        @title = title
        @chapters = chapters
    end

    def add_chapter(chap)
        @chapters.push(chap)
    end
    
    def chapters
        puts "Your book: #{@title} has #{@chapters.length} chapters:"
        for chap in @chapters do
            puts "#{@chapters.index(chap) + 1}: #{chap}"
        end
    end
end