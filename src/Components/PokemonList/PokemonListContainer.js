import React from "react";
import { connect } from "react-redux";
import { catchIt, letgo, setPokemons, setCurrentPage, setTotalPokemonsCount } from "../../redux/pokemonList-reducer";
import './PokemonList.css';
import PokemonList from './PokemonList';
import {getPokemons} from './../../api/api';
 
class PokemonListContainer extends React.Component {

  componentDidMount() {
    getPokemons().then(response => {
        if (this.props.pokemons.length === 0) {
          this.props.setPokemons(response.data);
          this.props.setTotalPokemonsCount(response.data.length);
        } 
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
  }
  render() {
    return (
        <PokemonList 
          totalPokemonsCount={this.props.totalPokemonsCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          pokemons={this.props.pokemons}
          onPageChanged={this.onPageChanged}
          catchIt={this.props.catchIt}
          letgo={this.props.letgo}
          

          />
    )
  }
}
let mapStateToProps = (state) => {
    return {
        pokemons: state.pokemonListPage.pokemons,
        pageSize: state.pokemonListPage.pageSize,
        totalPokemonsCount: state.pokemonListPage.totalPokemonsCount,
        currentPage: state.pokemonListPage.currentPage,
    }
}

export default connect (mapStateToProps, 
    { catchIt, letgo, setPokemons, setCurrentPage, setTotalPokemonsCount }) (PokemonListContainer);
