import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

function Search(props) {
    const router = useRouter();

    return(
       <div className="mx-60 w-1/3 cursor-text font-sans text-base">
            <input className="w-full h-8 rounded-full border hover:border-slate-400 placeholder:italic placeholder:text-slate-400 pl-3" placeholder="Search..." type="search" />
        </div>

    );
}

Search.propTypes = {};

export default Search;