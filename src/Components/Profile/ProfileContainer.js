import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setPokemonProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { compose } from 'redux';


class ProfileContainer extends React.Component{
    componentDidMount() {     
        const { pokemons, setPokemonProfile } = this.props;
        const queryParamId = this.props.match.params.pokemonID;
        const pokemonID = queryParamId ? parseInt(queryParamId) : 25;
        const foundedPokemon = pokemons.find(pokemon => pokemon.id === pokemonID);
        setPokemonProfile(foundedPokemon);
    }

    render() {
        return(
            <Profile props={this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    pokemons: state.pokemonListPage.pokemons,
});
export default compose(
    connect (mapStateToProps, {setPokemonProfile}),
    withRouter
)(ProfileContainer);
