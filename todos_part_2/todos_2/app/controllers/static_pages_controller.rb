class StaticPagesController < ApplicationController
    before_action :require_logged_out

    def root
    end
end
